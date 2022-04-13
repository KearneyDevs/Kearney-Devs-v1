import styled from 'styled-components';
import profile from '../../imgs/Shane_Kearney.png';

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4rem 0;

    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 5px solid #1BDFB0;

        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        filter: drop-shadow(0px 8px 5px rgba(0,0,0,0.25));
    }

    h1 {
        margin: 1rem 0;
    }

    p {
        margin: 0;
    }
`

const Profile = props => {

    console.log(props)

    return (
        <section>
            <ProfileContainer>
                <img src={profile} alt="Shane Kearney" />
                <h1>{props.section.profile.title.toUpperCase()}</h1>
                <p>({props.section.profile.handle.toLowerCase()})</p>
            </ProfileContainer>
            
            <table>
                <tbody>
                    {props.section.content.map(tr => {
                        return (
                            <tr key={tr.id}>
                                <td>{tr.topic}</td>
                                <td>{tr.value}</td>
                            </tr>             
                            )
                        })}    
                </tbody>
                
            </table>

            {props.section.description.map(p => {
                return (
                    <p key={p.id}>{p.paragraph}</p>
                )
            })}
        </section>
    )
}

export default Profile;
