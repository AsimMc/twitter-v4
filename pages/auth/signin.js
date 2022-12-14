import { getProviders, signIn } from "next-auth/react";


export default function signin({providers}) {
  return (
    <div className="flex justify-center mt-20 space-x-4">
        {/* <img src="https://logos-world.net/wp-content/uploads/2022/01/Rutgers-Scarlet-Knights-Logo-2001.png" alt="twitter image inside a phone" className="hidden object-cover md:w-44 md:h-80 rotate-6 md:inline-flex"/> */}
        <div className="">
            {Object.values(providers).map((provider)=>(
                <div key={provider.name} className="flex flex-col items-center">
                    <img className="w-36 object-cover" src="https://www.shareicon.net/data/512x512/2016/10/20/846435_letter_512x512.png" alt="rubars logo" />
                    <p className="text-center text-sm italic my-10">Welcome to RUbars! We are currently in Beta!</p>
                    <button onClick={()=>signIn(provider.id, {callbackUrl: "/"})} className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">Sign in with {provider.name}</button>
                </div>
            ))}
        </div>
    </div>
  )
}


export async function getServerSideProps(){
    const providers = await getProviders();
    return{
        props:{
            providers,
        },
    };
}