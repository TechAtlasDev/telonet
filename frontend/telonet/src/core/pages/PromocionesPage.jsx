import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/ContentStyles.css';

export default function PromocionesPage() {
    const [promociones, setPromociones] = useState([]);

    useEffect(() => {
        fetchPromociones();
    }, []);

    const fetchPromociones = () => {
        axios.get('http://localhost:3001/api/promociones') // Asegúrate de que el backend tiene esta ruta configurada
            .then(response => {
                setPromociones(response.data);
            })
            .catch(error => {
                console.error('Error fetching promociones:', error);
            });
    };

    return (
        <div className="main-content">
            <h1>Promociones Disponibles</h1>
            {promociones.length > 0 ? (
                <table className="promociones-table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Fecha Inicio</th>
                            <th>Fecha Fin</th>
                            <th>Porcentaje Descuento</th>
                            <th>Área Aplicación</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {promociones.map((promo) => (
                            <tr key={promo.id_promocion}>
                                <td>{promo.nombre_promo}</td>
                                <td>{promo.descripcion}</td>
                                <td>{promo.fecha_inicio}</td>
                                <td>{promo.fecha_fin}</td>
                                <td>{promo.porcentaje_descuento}%</td>
                                <td>{promo.area_aplicacion}</td>
                                <td>{promo.estado}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No se encontraron promociones disponibles.</p>
            )}
        </div>
    );
}
