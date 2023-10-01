interface Ubicacion {
  direccion: string;
  fraccionamiento: string;
  codigo_postal: string;
}

interface Caracteristicas_principales {
  precio: string;
  recamaras: string;
  baños_completos: string;
  baños_medios: string;
  construccion: string;
  terreno: string;
  tipo: string;
}

interface Aditamentos {
  interior: string;
  exterior: string;
}

export interface House {
  id: string;
  ubicacion: Ubicacion;
  caracteristicas_principales: Caracteristicas_principales;
  caracteristicas_generales: string;
  aditamentos: Aditamentos;
  imagenes: string[];
}

export const emptyHouse = {
  id: '',
  ubicacion: {
    direccion: '',
    fraccionamiento: '',
    codigo_postal: '',
  },
  caracteristicas_principales: {
    precio: '',
    recamaras: '',
    baños_completos: '',
    baños_medios: '',
    construccion: '',
    terreno: '',
    tipo: '',
  },
  caracteristicas_generales: '',
  aditamentos: {
    interior: '',
    exterior: '',
  },
  imagenes: [''],
};
