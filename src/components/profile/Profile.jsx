import styled from 'styled-components';
import { useTheme } from 'styled-components';
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
        border: ${props => `5px solid ${props.theme.colors.primary}`};

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
        color: ${props => props.theme.colors.secondary};
    }
`

const Table = styled.table`

    width: 100%;
    
    tr {
        display: flex;
        justify-content: space-between;
    }

    td {
        vertical-align: top;
        color: ${props => props.theme.colors.secondary};
        text-align: right;
    }

    td:first-child {
        font-weight: 600;
        padding-right: 2rem;  
        color: ${props => props.theme.colors.primary};
        text-align: left;
    }
`

const Profile = props => {

    const theme = useTheme();
    console.log(theme.colors);

    return (
        <section>
            <ProfileContainer>
                <img src={profile} alt="Shane Kearney" />
                <h1>{props.section.profile.title.toUpperCase()}</h1>
                <p>({props.section.profile.handle.toLowerCase()})</p>
            </ProfileContainer>
            
            <Table>
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
                
            </Table>

            {props.section.description.map(p => {
                return (
                    <p key={p.id}>{p.paragraph}</p>
                )
            })}
        </section>
    )
}

export default Profile;
