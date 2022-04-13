const Work = props => {
    return (
        <section>
            <h3>{props.section.title}</h3>
            {props.section.content.map(p => {
                return (
                    <p key={p.id}>{p.paragraph}</p>
                )
            })}
          
        </section>
    )
}

export default Work;