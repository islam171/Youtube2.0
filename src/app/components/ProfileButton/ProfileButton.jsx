import styles from './ProfileButton.module.scss'

const ProfileButton = () => {
    return <>
        <div className={styles.ProfileButton}><a href="https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Dru%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&ec=65620&hl=ru&passive=true&service=youtube&uilel=3&ifkv=Af_xneF6mDuiFDcYLLPh48R6gkaCJNoyVj4x8n-Kb-aabm7WxZgZEZk3yZEP6sqax-EFOx6qDG9SNQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin">Войти</a> </div>
    </>
}

export default ProfileButton