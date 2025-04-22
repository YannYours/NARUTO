export function RightChapter({ ChapterImg, ChapterTitle, ChapterResume, ChapterMainCharacters }) {
    return (
        <section className="chapters position-relative" style={{ marginTop: '7rem' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 main-chapter-container">
                        <div className="chapter-img">
                            <img src={ChapterImg} className="img-fluid" alt="Illustration chapitre" />
                        </div>
                    </div>
                    <div className="col-lg-6 chapter-content">
                        <h3 className="chapter-title">{ChapterTitle}</h3>
                        <p className="chapter-resume">
                            {ChapterResume}
                        </p>
                        <p className="chapter-main-characters">
                            {ChapterMainCharacters}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function LeftChapter({ ChapterImg, ChapterTitle, ChapterResume, ChapterMainCharacters }) {
    return (
        <section className="chapters position-relative" style={{ marginTop: '7rem' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 chapter-content">
                        <h3 className="chapter-title">{ChapterTitle}</h3>
                        <p className="chapter-resume">
                            {ChapterResume}
                        </p>
                        <p className="chapter-main-characters">
                            {ChapterMainCharacters}
                        </p>
                    </div>
                    <div className="col-lg-6 main-chapter-container">
                        <div className="chapter-img">
                            <img src={ChapterImg} className="img-fluid" alt="Illustration chapitre" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}