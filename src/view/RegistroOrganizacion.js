import React, { useState } from 'react';
import '../styles/stylesRegistroOrganizaciones.css';

function RegistroOrganizacion() {
  const [formData, setFormData] = useState({
      nombre: '',
      direccion: '',
      telefono: '',
      representanteLegal: '',
      telefonoRepresentanteLegal: '',
      ruc: '',
      contacto: '',
      telefonoContacto: '',
      comentarios: ''
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData); // Para ver los datos en la consola
  };

  return (
    <div className="menu-container">
      <header className="menu-header">
        <h1>ReqWizards App</h1>
        <span>Menú Principal / Registrar Empresa /</span>
      </header>
    
        <div className="menusub-container">
        
        <aside className="sidebar">
          <div className="nav-button">
            <button className="back-btn" aria-label="Atrás">←</button>
            <button className="forward-btn" aria-label="Adelante">→</button>
          </div>
          <div className="bar-menu">
            <p>MENU PRINCIPAL</p>
          </div>
            <div className="profile-section">
                <div className="profile-icon">👤</div>
                <p>Nombre Autor - Cod</p>
                <button className="close-btn" aria-label="Cerrar Sesion">Cerrar Sesion</button>
            </div>
      </aside>

      <main className="main-content">
        <h2>NUEVA ORGANIZACION</h2>
        <section className="barra">
            <label>Código</label>
            <label>Fecha</label>
            <label>Versión</label>
        </section>
        <section className="organization-section">
          <form onSubmit={handleSubmit}>
            <section className="barra">
              <label>ORG - 0002</label>
              <label>{new Date().toLocaleDateString()}</label>
              <label>1.0</label>
            </section>

            <section className="info-org">
  <h3>Información de la Organización</h3>
  <div className="input-container">
    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" required />
    <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} placeholder="Dirección" required />
    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Teléfono" required />
    <input type="text" name="representanteLegal" value={formData.representanteLegal} onChange={handleChange} placeholder="Representante Legal" required />
    <input type="text" name="telefonoRepresentanteLegal" value={formData.telefonoRepresentanteLegal} onChange={handleChange} placeholder="Teléfono Representante Legal" required />
    <input type="text" name="ruc" value={formData.ruc} onChange={handleChange} placeholder="RUC" required />
    <input type="text" name="contacto" value={formData.contacto} onChange={handleChange} placeholder="Contacto" required />
    <input type="text" name="telefonoContacto" value={formData.telefonoContacto} onChange={handleChange} placeholder="Teléfono Contacto" required />
  </div>
  
</section>

            <section className="comentarios">
                <h3>Comentarios</h3>
                <textarea name="comentarios" value={formData.comentarios} onChange={handleChange} placeholder="Añadir comentarios"></textarea>
            </section>

            <div className="buttons">
                <button type="button" className="cancel-btn">Cancelar</button>
                <button type="submit" className="register-btn">Registrarse</button>
            </div>
            </form>
        </section>
      </main>
    </div>
    </div>
  );
}

export default RegistroOrganizacion;
