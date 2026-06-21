import { createContext, useContext, useState, useEffect } from "react";

const UsuarioContext = createContext();

const USUARIO_DEFAULT = {
  nombre: "Mariano",
  dni: "12345678",
  rol: "Docente",
  institucion: "Universidad Nacional de Jujuy",
};


export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(() => {
    const guardado = localStorage.getItem("usuario");
    return guardado ? JSON.parse(guardado) : USUARIO_DEFAULT;
  });

  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);

  const actualizarPerfil = (nuevosDatos) => {
    setUsuario((prev) => ({ ...prev, ...nuevosDatos }));
  };
return (
    <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
    {children}
    </UsuarioContext.Provider>
    );
};

export const useUsuario = () => useContext(UsuarioContext);