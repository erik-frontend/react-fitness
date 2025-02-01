import React from 'react'
import { features } from '../../data/programData'

const PlanContent = () => {
    return (
        <>
            <div className="content">
                <h1 className="content-title">Basic <span>Plan</span></h1>
                <p className="content-subtitle">It’s a long estabilished fact that a reader will be distracted by
                    the readable content</p>
                <div className="content-features">
                    {features.map((item, index) => (
                        <div className="content-features-block" key={index}>
                            <figure>
                                <img src={item.img} alt={item.alt} />
                            </figure>
                            <div className="features-block-discript">
                                <span className="features-block-number">{item.number}</span>
                                <span className="features-block-text">{item.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <article className="content-article">
                    <h2>About the plan</h2>
                    <p>Diam ante tortor diam mauris. Feugiat fames in et neque. Sem mollis sagittis id bibendum
                        vitae magna risus. Feugiat adipiscing gravida bibendum adipiscing vel fermentum potenti.
                        Mus ipsum consequat morbi aenean orci mauris integer eu. Purus accumsan non a ut aliquet
                        volutpat leo. At vitae porttitor blandit porta. Pretium sed tempor vestibulum sit urna.
                        Potenti purus sodales in enim nunc. In et auctor fusce sit donec condimentum. Diam
                        ultrices enim nunc ornare id aliquet sed arcu commodo. Aliquam morbi fermentum amet dui
                        ullamcorper praesent elit. Viverra nam massa cursus leo blandit eget eu. Tempor enim
                        neque metus nunc sodales at eros. Malesuada placerat vestibulum amet sit tempor mi
                        dignissim. Feugiat nullam urna gravida vulputate mi eleifend laoreet. Nunc facilisis
                        egestas faucibus eget suspendisse. In id pulvinar sem lectus lectus eu. Aliquam
                        elementum semper faucibus volutpat facilisis mi.</p>
                    <h2>Is this the right package for me?</h2>
                    <p>Consectetur adipiscing elit. Odio amet egestas dignissim eu nunc. Id pulvinar enim
                        volutpat tellus. Cras tellus ac dui at sed.</p>
                    <p>Viverra urna imperdiet non malesuada. In massa id tellus natoque augue in et, et.
                        Suspendisse feugiat scelerisque et, viverra urna imperdiet.Vitae interdum quis lacus ut
                        viverra.
                    </p>
                    <ol>
                        <li>Enim eu turpis egestas pretium aenean pharetra magna ac placerat.</li>
                        <li>Nunc semper velit netus donec commodo.</li>
                        <li> Lacus hendrerit aliquam habitant eget faucibus venenatis turpis</li>
                    </ol>
                </article>
            </div>
        </>
    )
}

export default PlanContent