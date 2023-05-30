import { useState, useEffect } from "react";
import { useLanguage } from "../context/languageCtx";

export const useForm = (initialForm, validateForm) => {
  const { language, translate } = useLanguage();

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submit) {
      setLoading(true);
      fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json, text/plain, */*",
        },
        body: JSON.stringify({
          nombre: form.name,
          email: form.email,
          telefono: form.phone,
          pais: form.country,
          empresa: form.company,
          puesto: form.jobTitle,
          consulta: form.comments,
        }),
      }).then((res) => {
        if (res.status === 200) {
          setForm(initialForm);
          setLoading(false);
          setResponse("ok");
          setTimeout(() => {
            setResponse(null);
          }, 3000);
        } else {
          setLoading(false);
          setResponse("fail");
          setTimeout(() => {
            setResponse(null);
          }, 5000);
        }
      });
    }
  }, [errors]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form, translate, language));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    setTimeout(() => {
      setErrors(validateForm(form, translate, language));
    }, 100);
  };

  return {
    form,
    errors,
    submit,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
