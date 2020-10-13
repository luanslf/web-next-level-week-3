import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import localImg from '../images/local.svg';
import '../styles/pages/orphanage-map.css';

import 'leaflet/dist/leaflet.css';

function OrphanageMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={localImg} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Caxias</strong>
                    <span>Maranhão</span>
                </footer>
            </aside>

            <Map
                center={[-4.8672043, -43.3423748]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
};

export default OrphanageMap;