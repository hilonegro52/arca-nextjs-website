import { useForm } from "../hooks/useForm";
import Blocker from "./Blocker";
import Loader from "./Loader";
import Message from "./Message.js";
import { useLanguage } from "../context/languageCtx";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  country: "",
  company: "",
  jobTitle: "",
  comments: "",
};

let submitState;

const validationsForm = (form, translate, language) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
    regexEmail =
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
    regexPhone = /^([0-9]{6,8})$/,
    regexArea = /^([0-9]{2,4})$/;

  if (submitState && !form.name.trim()) {
    errors.name = translate[language].valiNom;
  }
  if (form.name !== "") {
    if (!regexName.test(form.name.trim())) {
      errors.name = translate[language].invNom;
    }
  }
  if (submitState && !form.email.trim()) {
    errors.email = translate[language].valiMail;
  }
  if (form.email !== "") {
    if (!regexEmail.test(form.email.trim())) {
      errors.email = translate[language].invMail;
    }
  }
  if (submitState && !form.comments.trim()) {
    errors.comments = translate[language].valCons;
  }

  submitState = false;
  return errors;
};

let styles = {
  color: "#f5564b",
  fontSize: ".8rem",
};

const ContactForm = () => {
  const { language, translate } = useLanguage();

  const {
    form,
    errors,
    submit,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);
  submitState = submit;

  const handleClickBtn = (e) => {
    e.target.classList.add("animBtn");
    setTimeout(() => {
      e.target.classList.remove("animBtn");
    }, 50);
  };

  return (
    <div className="relative">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            className="bg-light dark:bg-darkDark shadow-[inset_0_-1px_0_#cad2d6] focus:shadow-[inset_0_-2px_0_black] dark:shadow-[inset_0_-1px_0_#42414d] dark:focus:shadow-[inset_0_-2px_0_#f8f9fa]"
            type="text"
            name="name"
            placeholder={translate[language].formNom}
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span>*</span>
        </div>
        <p className="errors" style={styles}>
          {errors.name && errors.name}
        </p>
        <div className="input-container">
          <input
            className="bg-light dark:bg-darkDark shadow-[inset_0_-1px_0_#cad2d6] focus:shadow-[inset_0_-2px_0_black] dark:shadow-[inset_0_-1px_0_#42414d] dark:focus:shadow-[inset_0_-2px_0_#f8f9fa]"
            type="text"
            name="email"
            placeholder={translate[language].formMail}
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span>*</span>
        </div>
        <p className="errors" style={styles}>
          {errors.email && errors.email}
        </p>
        <div className="input-container">
          <input
            className="bg-light dark:bg-darkDark shadow-[inset_0_-1px_0_#cad2d6] focus:shadow-[inset_0_-2px_0_black] dark:shadow-[inset_0_-1px_0_#42414d] dark:focus:shadow-[inset_0_-2px_0_#f8f9fa]"
            type="text"
            name="country"
            placeholder={translate[language].formPais}
            value={form.country}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <p className="errors" style={styles}>
          {errors.country && errors.country}
        </p>
        <div className="input-container">
          <div className="phone-container">
            <input
              className="bg-light dark:bg-darkDark shadow-[inset_0_-1px_0_#cad2d6] focus:shadow-[inset_0_-2px_0_black] dark:shadow-[inset_0_-1px_0_#42414d] dark:focus:shadow-[inset_0_-2px_0_#f8f9fa]"
              type="tel"
              name="phone"
              placeholder={translate[language].formTel}
              value={form.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <p className="errors" style={styles}>
          {errors.phone && errors.phone}
        </p>
        <div className="input-container">
          <input
            className="bg-light dark:bg-darkDark shadow-[inset_0_-1px_0_#cad2d6] focus:shadow-[inset_0_-2px_0_black] dark:shadow-[inset_0_-1px_0_#42414d] dark:focus:shadow-[inset_0_-2px_0_#f8f9fa]"
            type="text"
            name="company"
            placeholder={translate[language].formEmp}
            value={form.company}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <p className="errors" style={styles}>
          {errors.company && errors.company}
        </p>
        <div className="input-container">
          <input
            className="bg-light dark:bg-darkDark shadow-[inset_0_-1px_0_#cad2d6] focus:shadow-[inset_0_-2px_0_black] dark:shadow-[inset_0_-1px_0_#42414d] dark:focus:shadow-[inset_0_-2px_0_#f8f9fa]"
            type="text"
            name="jobTitle"
            placeholder={translate[language].formPuesto}
            value={form.jobTitle}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <p className="errors" style={styles}>
          {errors.jobTitle && errors.jobTitle}
        </p>
        <div className="input-container">
          <textarea
            className="bg-light dark:bg-darkDark shadow-[inset_0_-1px_0_#cad2d6] focus:shadow-[inset_0_-2px_0_black] dark:shadow-[inset_0_-1px_0_#42414d] dark:focus:shadow-[inset_0_-2px_0_#f8f9fa]"
            name="comments"
            cols="50"
            rows="5"
            placeholder={translate[language].formCons}
            value={form.comments}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          <span>*</span>
        </div>
        <p className="errors" style={styles}>
          {errors.comments && errors.comments}
        </p>

        <p className="required text-[#f5564b]">
          {translate[language].formCampos}
        </p>
        <input
          className=""
          type="submit"
          value={translate[language].formBtn}
          onClick={handleClickBtn}
        />
      </form>
      {loading && <Loader />}
      {loading && <Blocker />}
      {response && (
        <Message
          msg={
            response === "ok"
              ? translate[language].consEnv
              : translate[language].consErr
          }
          bgColor={response === "ok" ? "#54cf9c" : "#f5564b"}
        />
      )}
    </div>
  );
};

export default ContactForm;
