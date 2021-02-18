import styled from 'styled-components'
import {Download} from '@styled-icons/boxicons-regular/Download'
import {Eye} from '@styled-icons/bootstrap/Eye'


export default function MovieCard({ title, poster, language, show, download }) {

    const showTrailer = (title) => {
      show(title)
    }


    return (
      <ContainerWrapper 
        src={poster} 
      >
      <TitleWrapper> <Title>{title}</Title></TitleWrapper>
      <BottomContaier>
        <Language>{language}</Language>
        { download === true ? null : 
        <ActionContaier>
          <EyeWrapper onClick={() => showTrailer(title)} alt={title} ><CustomEye /></EyeWrapper>
          <DownloadWrapper><CustomDownload /></DownloadWrapper>
        </ActionContaier>
        }
        
      </BottomContaier>
    </ContainerWrapper>
    )
}

const ContainerWrapper = styled.div`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center; 
  background-size: cover;
  background-color: white;
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px 20px 0px 20px;
`

const TitleWrapper = styled.div`
  background-color: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.p`
  padding: 5px 0px 5px 0px;
  color: white;
  font-size: 15px;
  text-align: center;
`

const BottomContaier = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  width: 100%;
  margin-bottom: 2px;
`

const Language = styled.p`
  text-transorm: uppercase;
  color: white;
  text-align-center;
  background-color: #BB000E;
  padding: 3px;
  font-size: 14px;
  border-radius: 5px;
  margin: 0px 0px 0px 2px;
`

const ActionContaier = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const CustomDownload = styled(Download)`
  color: white;
  height: 15px;
  width: 30px;
  background-color: #BB000E;
  margin-left: 5px;
  border-radius: 3px;
`;

const CustomEye = styled(Eye)`
  color: white;
  height: 15px;
  width: 30px;
  background-color: #BB000E;
  margin-right: 5px;
  border-radius: 3px;
`

const EyeWrapper = styled.a`
  cursor: pointer;
`

const DownloadWrapper = styled.a``