const Bio = props => {

    console.log(props);

    return (
        <section>
            <h3>{props.section.title}</h3>
            
            <table>
                <tbody>
                    {props.section.content.map(tr => {
                        return (
                            <tr key={tr.id}>
                                <td>{tr.date}</td>
                                <td>{tr.context}</td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>            
        </section>
    )
}

export default Bio;
