import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../style/auth.scss';

// setpack {snowpack, vite, ...}

// Module Bundler -> 

export function Home() {
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em Tempo-real</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logoImg} alt="Letmeask" />

                    <button>
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com Google
                    </button>
                    <div>Ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder='Digíte o código da sala'
                        />
                        <button type="submit">
                            Entra na sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}