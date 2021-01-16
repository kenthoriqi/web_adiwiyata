import  React  from "react";
import Gallery from "./gallery";
import Hari from "./hari";

class Beranda extends React.Component{
    render(){
        return(
        <div>
            <header class="masthead">
            <div class="container">
                <div class="masthead-subheading">Selamat Datang di Web Adiwiyata</div>
                <div class="masthead-heading text-uppercase">Selamat Bertemu denganmu</div>
                <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Apa Itu Adiwiyata</a>
            </div>
        </header>
        <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Adiwiyata</h2>
                    <h3 class="section-subheading text-muted">Penjelasan</h3>
                </div>
                <div class="row text-center">
                <h5 class="text-muted">Adiwiyata adalah upaya membangun program atau wadah yang baik dan ideal untuk mendapatkan ilmu pengetahuan dan berbagai norma serta 
                etika yang dapat menjadi dasar manusia menuju terciptanya kesejahteraan hidup untuk Cita-cita pembangunan berkelanjutan. Adiwiyata merupakan nama program pendidikan lingkungan hidup.</h5>
                </div>
            </div>
        </section>
        <Gallery />
        <Hari />
        </div>
        )
    }
}

export default Beranda;