import './nosotros.css';
import Iframe from 'react-iframe';

const Nosotros = () => {
    return <div>
        <p>J&S es una empresa familiar que nació hace más de 30 años cuando sus dueños llegaron desde Misiones a Buenos Aires.
        Trabajamos solamente con madera de primera calidad, proveniente de Misiones, Corrientes y Entre Ríos, para ofrecerles mayor calidad y durabilidad en nuestros productos.</p>
        <p className='horario'>
            Nos encontramos en Av. Mitre N°636. Trabajamos de Lunes a Viernes de 8.30hs a 12.30hs y de 14.30hs a 18.30hs |
            Sábados y feriados de 9 a 13hs.
        </p>
        <Iframe url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.095967922946!2d-58.21574794987555!3d-34.7531752728309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32f38c97f82af%3A0x64458ab82acddee2!2sJ%26S%20Maderas!5e0!3m2!1ses!2sar!4v1679773608403!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade' className='mapa' display='block' frameBorder={0}/>
    </div>
};

export default Nosotros;