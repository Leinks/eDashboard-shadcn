export const CheckPassword = (data: string) => {
    
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(data)) {
        console.log('La Contraseña no puede tener espacios en Blanco.')
      return 'La Contraseña no puede tener espacios en Blanco.';
    }
    const isValidLength = /^.{5,23}$/;
    if (!isValidLength.test(data)) {
        console.log('La Contraseña solo puede tener de 8 a 23 caracteres.')
      return 'La Contraseña solo puede tener de 8 a 23 caracteres.';
    }
  
    return null;
  };


