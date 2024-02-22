import React, { useState } from 'react';
import './createform.css'; 

    const CreateForm = () => {
      const [formData, setFormData] = useState({
        nombre: '',
        categoria: '',
        genero:'',
        imagen:'',
        talla:'',
        precio:'',
        ubicacion:'',
       descripcion:''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Nombre: ${formData.nombre}\nCategoria: ${formData.categoria}\nGenero: ${formData.genero}\nPrecio: ${formData.precio}`);
        // Aquí puedes agregar lógica para enviar los datos a un servidor, por ejemplo.
      };
    
      return (
        <div classname="contenedor">
        <form className="formulario" onSubmit={handleSubmit}>
          <h1 className='añade'>añade tu producto</h1>
          <label className='nombre'>
            Nombre:
            <input  type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
          </label>
          <br />
          <label>
            Categoria:
            <input type="text" name="categoria" value={formData.categoria} onChange={handleChange} />
          </label>
          <label>
            Genero:
            <input type="text" name="genero" value={formData.genero} onChange={handleChange} />
          </label>
          <label>
            Imagen:
            <input type="url" name="imagen" value={formData.imagen} onChange={handleChange} />
          </label>
          <label className='talla'>
            Talla:
            <input type="text" name="talla" value={formData.talla} onChange={handleChange} />
          </label>
          <label className='precio'>
            Precio:
            <input type="number" name="precio" value={formData.precio} onChange={handleChange} />
          </label>
          <label>
            Ubicacion:
            <input type="text" name="ubicacion" value={formData.ubicacion} onChange={handleChange} />
          </label>
          <label className='descripcion'>
            Descripcion:
            <input className="input"type="text" name="description" value={formData.descripcion} onChange={handleChange} />
          </label>
          <br />
          <button className="botonenviar"type="submit">Enviar</button>
        </form>
        </div>
      );
    }
    export default CreateForm;