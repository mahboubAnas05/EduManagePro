export default function SignIn(){
    return(
        <section id="Sign_In" >
            <div className="text-center">
                <h1 style={{
                    borderBottom : "3px solid #01c38d ",
                    display : "inline"
                }} className="hoverText text-center text-light mt-5">
                    S'inscrire
                </h1>
            </div>
            <form action="" method="post" className="mt-4 mx-4 d-md-flex justify-content-center align-items-center gap-3">
                <div>
                    <input type="text" name="userName" className="form-control my-3" placeholder="créer votre nom utilisateur"/>
                </div>
                <div>
                    <input type="email" name="signIn" className="form-control my-3" placeholder="entrer votre email"/>
                </div>
                <div className="text-center"><input type="button" value="S'inscrire" className="btn text-light " style={{
                    backgroundColor : "#01c38d"
                }}/></div>
            </form>
        </section>
    )
}