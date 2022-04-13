import { Title } from "../styled/Styles";

const Work = props => {
    return (
        <section>
            <Title>{props.section.title}</Title>
            {props.section.content.map(p => {
                return (
                    <p key={p.id}>{p.paragraph}</p>
                )
            })}
          
        </section>
    )
}

export default Work;