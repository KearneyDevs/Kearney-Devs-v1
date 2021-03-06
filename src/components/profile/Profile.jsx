import { useTheme } from 'styled-components';
import profile from '../../imgs/Shane_Kearney.png';
import { Section } from '../styled/Styles';
import { ProfileContainer, Table } from './Profile.style';

const Profile = props => {

    const theme = useTheme();
    console.log(theme.colors);

    return (
        <Section>
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
        </Section>
    )
}

export default Profile;
