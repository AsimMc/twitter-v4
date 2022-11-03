import Image from 'next/image';
import SidebarMenuItem from './SidebarMenuItem';
import {CreditCardIcon, HomeIcon, TrendingUpIcon} from '@heroicons/react/solid';
import {HashtagIcon, ClipboardIcon, UserIcon, DotsCircleHorizontalIcon} from '@heroicons/react/outline';
import {BellIcon, InboxIcon, BookmarkIcon, DotsHorizontalIcon} from '@heroicons/react/outline'
import {useSession, signIn, signOut} from "next-auth/react"

export default function Sidebar() {
  const {data:session} = useSession();
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">

    {/* Twitter Logo */}

    <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image width="60" height="60" src="https://www.shareicon.net/data/512x512/2016/10/20/846435_letter_512x512.png" text="BettyShare"></Image>
    </div>

    {/* Menu */}

    <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
        <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
        {session && (
        <>
        <SidebarMenuItem text="Skip a Line! (Coming)" Icon={TrendingUpIcon}/>
        <SidebarMenuItem text="Wait Times (Coming)" Icon={BellIcon}/>
        <SidebarMenuItem text="Messages (Coming)" Icon={InboxIcon}/>
        <SidebarMenuItem text="Promotions (Coming)" Icon={BookmarkIcon}/>
        {/* <SidebarMenuItem text="Add Card (Coming)" Icon={CreditCardIcon}/> */}
        <SidebarMenuItem text="Profile (Coming)" Icon={UserIcon}/>
        <SidebarMenuItem text="More (Coming)" Icon={DotsCircleHorizontalIcon}/>
        </>
        )}
    </div>

    {/* Button */}
    
    {session ? (
      <>
    
  

    <button className="bg-rose-600 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Rah! Rah!</button>

    {/* Mini-Profile */}
    
    <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img onClick={signOut} src={session.user.image} alt="user-img" className="h-10 w-10 rounded-full xl:mr-2"/>
        <div className="leading-5 hidden xl:inline">
            <h4 className="font-bold">{session.user.name}</h4>
            <p className="text-gray-500">@{session.user.username}</p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8"/>
    </div>
    </>
    ) :(
      <button onClick={signIn} className= "bg-rose-600 text-white rounded-full w-40 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Sign In</button>
    )}

    </div>
  )
}
