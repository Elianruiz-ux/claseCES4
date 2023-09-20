import { useState } from "react";

const FormController = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleChangeEmial = (e) => {
    const valor = e.target.value;
    setForm({ ...form, email: valor });

  };

  const handleChangePass = (e) => {
    const valor = e.target.value;
    setForm({ ...form, password: valor });
  };


  return (
    <div>
      <input
        type="email"
        name="email"
        placeholder="ingrese email"
        autoComplete="off"
        value={form.email}
        onChange={handleChangeEmial}
      />
      <input
        type="password"
        name="password"
        placeholder="ingrese password"
        autoComplete="off"
        value={form.password}
        onChange={handleChangePass}
      />
    </div>
  );
};

export default FormController;
