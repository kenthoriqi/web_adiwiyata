import  React  from "react";

class Gallery extends React.Component{
    render(){
        return(
            <section class="page-section bg-light" id="portfolio">
                        <div class="container">
                            <div class="text-center">
                                <h2 class="section-heading text-uppercase">Gallery</h2>
                                <h3 class="section-subheading text-muted">Kumpulan foto kegiatan adiwiyata</h3>
                            </div>
                            <div class="row">
                                <div class="col-lg-4 col-sm-6 mb-4">
                                    <div class="portfolio-item">
                                        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                            <div class="portfolio-hover">
                                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                            </div>
                                            <img class="img-fluid" src="assets/img/portfolio/buang.jpg" alt="" />
                                        </a>
                                        <div class="portfolio-caption">
                                            <div class="portfolio-caption-heading">Buang Sampah</div>
                                            <div class="portfolio-caption-subheading text-muted">Buang sampah pada tempatnya</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 mb-4">
                                    <div class="portfolio-item">
                                        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                                            <div class="portfolio-hover">
                                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                            </div>
                                            <img class="img-fluid" src="assets/img/portfolio/daur.jpeg" alt="" />
                                        </a>
                                        <div class="portfolio-caption">
                                            <div class="portfolio-caption-heading">Daur Ulang</div>
                                            <div class="portfolio-caption-subheading text-muted">Menggunakan Kembali</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 mb-4">
                                    <div class="portfolio-item">
                                        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                                            <div class="portfolio-hover">
                                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                            </div>
                                            <img class="img-fluid" src="assets/img/portfolio/tanam.jpg" alt="" />
                                        </a>
                                        <div class="portfolio-caption">
                                            <div class="portfolio-caption-heading">Penanaman</div>
                                            <div class="portfolio-caption-subheading text-muted">Reboisasi</div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </section>
        )
    }
}

export default Gallery;