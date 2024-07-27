"use client"
import Globe from 'react-globe.gl'
import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import * as topojson from 'topojson';

export default function globe2(props) {
    const polygonsMaterial = new THREE.MeshLambertMaterial({ color: '#7c3aed', side: THREE.DoubleSide });
    const [landPolygons, setLandPolygons] = useState([]);

    useEffect(() => {
      // load data
      fetch('//unpkg.com/world-atlas/land-110m.json').then(res => res.json())
        .then(landTopo => {
          setLandPolygons(topojson.feature(landTopo, landTopo.objects.land).features);
        });
    }, []);

    return (
        <div className="absolute right-[-12em] lg:right-[-6em] z-0 top-0 scale-50 lg:scale-75">

            <Globe
            width={800}
            backgroundColor="rgba(0,0,0,0)"
            showGlobe={false}
            showAtmosphere={false}
            polygonsData={landPolygons}
            polygonCapMaterial={polygonsMaterial}
            polygonSideColor={() => 'rgba(0, 0, 0, 0)'}
            />
        </div>
    )
}