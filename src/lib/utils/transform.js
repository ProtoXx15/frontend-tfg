export const transformNombre = (nombre) => {
    switch (nombre) {
        case "Boxeo":
            return 1;
        case "Yoga":
            return 4;
        case "Musculación":
            return 2;
        case "Pilates":
            return 5;
        case "Zumba":
            return 3;
        default:
            return nombre;
    }
}

export const transformNumero = (numero) => {
    switch (numero) {
        case 1:
            return "Boxeo";
        case 4:
            return "Yoga";
        case 2:
            return "Musculación";
        case 5:
            return "Pilates";
        case 3:
            return "Zumba";
        default:
            return numero;
    }
}   

