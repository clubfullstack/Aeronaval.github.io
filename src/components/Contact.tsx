import React, { useState } from 'react';
import { ContactStyles, TextStyles } from '../styles/styles';
import { SectionWrapper } from '../hoc';
import { handleSubmit as sendEmail } from '../utils/send-mail';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const success = await sendEmail(e, formData.name, formData.email, formData.message);
    if (success) {
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#000721] to-[#000721]">
        <h1 className={`text-center mb-5 pt-2 ${TextStyles.title}`}>Fale Conosco</h1>
      <div className={ContactStyles.container}>
        <form onSubmit={handleSubmit} className={ContactStyles.form}>
          <div className={ContactStyles.formGroup}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
              className={ContactStyles.input}
              required
            />
          </div>
          <div className={ContactStyles.formGroup}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={ContactStyles.input}
              required
            />
          </div>
          <div className={ContactStyles.formGroup}>
            <textarea
              id="message"
              name="message"
              placeholder="Mensagem"
              value={formData.message}
              onChange={handleChange}
              className={ContactStyles.textarea}
              required
            />
          </div>
          <button type="submit" className={ContactStyles.button}>Enviar</button>
        </form>
      </div>
    </div>
  );
};

const NamedContact = SectionWrapper(Contact, "contact");
export default NamedContact;
