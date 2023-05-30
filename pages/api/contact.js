import nodemailer from "nodemailer";

export default function (req, res) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "mail.arca.com.ar",
    auth: {
      user: "test@arca.com.ar",
      pass: "8A*.2$BGUDpj",
    },
    secure: true,
  });

  const mailData = {
    from: "test@arca.com.ar",
    to: "estudiox12@gmail.com",
    subject: `Mensaje de ${req.body.nombre}`,
    html: `<hr>
   <span><b>Nombre: </b></span><span>${req.body.nombre}</span>
   <hr>
   <span><b>Email: </b></span><span>${req.body.email}</span>
   <hr>
   <span><b>Teléfono: </b></span><span>${req.body.telefono}</span>
   <hr>
   <span><b>País: </b></span><span>${req.body.pais}</span>
   <hr>
   <span><b>Empresa: </b></span><span>${req.body.empresa}</span>
   <hr>
   <span><b>Puesto: </b></span><span>${req.body.puesto}</span>
   <hr>
   <span><b>Consulta: </b></span><span>${req.body.consulta}</span>
   <hr>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      res.status(500).send("error");
    } else {
      console.log(info);
      res.status(200).send("success");
    }
  });
}
