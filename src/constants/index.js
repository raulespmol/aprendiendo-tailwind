import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Inicio" },
    { href: "#about-us", label: "Acerca de" },
    { href: "#products", label: "Productos" },
    { href: "#contact-us", label: "Contacto" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Modelos' },
    { value: '500+', label: 'Tiendas' },
    { value: '250k+', label: 'Clientes' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$180.000",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$190.000",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$200.000",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$210.000",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Envío gratis",
        subtext: "Disfruta de una experiencia de compra sin complicaciones con nuestro servicio de envío gratuito."
    },
    {
        imgURL: shieldTick,
        label: "Pago Seguro",
        subtext: "Disfruta de transacciones sin preocupaciones con nuestras opciones de pago seguras."
    },
    {
        imgURL: support,
        label: "Soporte",
        subtext: "Nuestro equipo dedicado está aquí para ayudarte en cada paso del camino." 
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Carlos Rodríguez', 
        rating: 4.5,
        feedback: "La atención al detalle y la calidad del producto superaron mis expectativas." 
    },
    {
        imgURL: customer2,
        customerName: 'María Fernández', 
        rating: 4.5,
        feedback: "El producto no solo cumplió, sino que superó mis expectativas. ¡Sin duda volveré a comprar!" 
    }
];


export const footerLinks = [
    {
        title: "Productos",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Ayuda",
        links: [
            { name: "Acerca de", link: "/" },
            { name: "Preguntas Frecuentes", link: "/" },
            { name: "Política de Privacidad", link: "/" },
            { name: "Política de Pagos", link: "/" },
        ],
    },
    {
        title: "Contacto",
        links: [
            { name: "contacto@nike.com", link: "mailto:contacto@nike.com" },
            { name: "+9876543210", link: "tel:+9876543210" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
