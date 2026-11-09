function Choose() {
    return (
        <section className="choose">
            <h3 className="choose-heading">
                Proqramin mərhələləri
            </h3>

            <p className="choose-description">
                Təcrübə proqramina qoşulmaq üçün keçəcəyin mərhələlər
            </p>

            <div className="choose-container">
                <div className="choose-item">
                    <span className="choose-number">01</span>
                    <h4>Qeydiyyat</h4>
                    <p>Proqrama müraciətini göndər.</p>
                </div>

                <div className="choose-item">
                    <span className="choose-number">02</span>
                    <h4>Seçim mərhələsi</h4>
                    <p>Bilik və praktikalari nümayiş etdir.</p>
                </div>

                <div className="choose-item">
                    <span className="choose-number">03</span>
                    <h4>Təlim və praktika</h4>
                    <p>Yeni biliklər əldə et və praktika keç.</p>
                </div>

                <div className="choose-item">
                    <span className="choose-number">04</span>
                    <h4>Yekun layihə</h4>
                    <p>Öyrəndiklərini real layihədə tətbiq et.</p>
                </div>
            </div>
        </section>
    );
}

export default Choose;
