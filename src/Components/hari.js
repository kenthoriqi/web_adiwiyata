import  React  from "react";

class Hari extends React.Component{
    render(){
        return(
            <section class="page-section" id="about">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Hari Besar</h2>
                    <h3 class="section-subheading text-muted">Hari-hari untuk memperingati lingkungan</h3>
                </div>
                <ul class="timeline">
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>21 Februari</h4>
                                <h4 class="subheading">Hari Peduli Sampah Nasional</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted"></p>21 Februari untuk mengingatkan bahwa persoalan sampah harus menjadi perhatian utama yang melibatkan seluruh komponen masyarakat dalam pengelolaannya.
                            </div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/hutan.jpg" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>21 Maret</h4>
                                <h4 class="subheading">Hari Hutan Sedunia</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Setiap tahunnya 13 juta hektare hutan (luas yang kurang lebih sama dengan luas negara Inggris) menghilang dari muka bumi. Bersamaan dengan hilangnya hutan, hilang pula ekosistem yang ada di dalamnya, termasuk spesies tumbuhan dan hewan langka. 80% keanekaragaman hayati berdiam di hutan</p></div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/air.jpg" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>22 Maret</h4>
                                <h4 class="subheading">Hari Air Sedunia</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Hari Air Sedunia (Inggris: World Day for Water) adalah perayaan yang ditujukan sebagai usaha-usaha menarik perhatian publik akan pentingnya air bersih dan usaha penyadaran untuk pengelolaan sumber-sumber air bersih yang berkelanjutan</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>22 April</h4>
                                <h4 class="subheading">Hari Bumi Sedunia</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Hari Bumi adalah hari pengamatan tentang bumi yang dicanangkan setiap tahun pada tanggal 22 April dan diperingati secara internasional. Hari Bumi dirancang untuk meningkatkan kesedaran dan apresiasi terhadap planet yang ditinggali manusia ini yaitu bumi.</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image">
                            <h4>
                                Dan
                                <br />
                                Masih banyak
                                <br />
                                Lagi
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        )
    }
}

export default Hari;