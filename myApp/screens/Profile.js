import ForItem from '../components/controls/FormItem';
import {Content, Header, Wrapper} from '../components/layout';


export default function Profile (){
    return(
        <Wrapper>
            <Header title='Perfile' showBack={true}/>
            <Content>
                <ForItem label={"Correo elctronico"}/>
                <ForItem label={"Nombre Completo"}/>
                <ForItem label={"Telefono"}/>
            </Content>  
        </Wrapper>
    )

}
