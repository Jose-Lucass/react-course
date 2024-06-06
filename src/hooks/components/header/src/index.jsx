import styles, { HeaderButton, HeaderContainer, HeaderLink, HeaderLogo, HeaderNav, MenuBarIcon, NavMenuBar } from "./style"
import { AngleDown, AngleUp} from "./svg"

export default function MenuBar(){
    return(
        <HeaderContainer>
            <HeaderLogo>Logo</HeaderLogo>
            <HeaderNav>
                <HeaderLink>link 1</HeaderLink>
                <HeaderLink>link 2</HeaderLink>
                <HeaderLink>link 3</HeaderLink>
                <NavMenuBar>link 4  <MenuBarIcon /></NavMenuBar>
            </HeaderNav>
            <HeaderButton></HeaderButton>
        </HeaderContainer>
    )
}