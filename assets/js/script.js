class Multimedia {
    constructor(url) {
        this._url = url;
    }
    get url() {
        return this._url;
    }
    setInicio() {
        return 'Este método es para realizar un cambio en la URL del video';
    }
}
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }
    get id() {
        return this._id;
    }
    playMultimedia() {
        modulo.agregarVideoPublic(this._url, this._id);
    }
    setInicio(tiempo) {
        this.id.setAtribute('src', `${this.url}?start=${tiempo}`);
    }
}  
let modulo = (() => {
    let agregarVideoPrivate = (url, id) => {
        let element = document.getElementById(id);
        element.setAttribute('src', url);
    }
    return {
        agregarVideoPublic: (url, id) => {
            agregarVideoPrivate(url, id);
        }
    };
})();  

let pelicula = new Reproductor('https://www.youtube.com/embed/IYFF_h-1y8c?si=NFPpYK-h3DjO5QVK', 'peliculas');
let serie = new Reproductor('https://www.youtube.com/embed/6yoKbE_Cxj4?si=2kAQuSXVr5IFidnr', 'series');  
let musica = new Reproductor('https://www.youtube.com/embed/_jRZQ1KgAwg?si=O6pM-kRgscgFerMv', 'musica');

pelicula.playMultimedia();
serie.playMultimedia();
musica.playMultimedia();

pelicula.setInicio(10);
serie.setInicio(15);
musica.setInicio(10);