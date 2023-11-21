import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Navebar = () => {
    return (
        <div className=" flex-col md:flex border-b-4 h-full">
            <div className="border-b">
                <div className="flex h-16 items-center px-4">
                    {/* <TeamSwitcher />
                    <MainNav className="mx-6" /> */}

                    <h1 className="text-3xl font-bold tracking-tight">Image World</h1>
                    <div className="ml-auto flex items-center space-x-4">
                        {/* <Search />
                        <UserNav /> */}
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                            <AvatarFallback>MDQ</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navebar