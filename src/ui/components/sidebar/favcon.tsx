import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export const Favcon = () => {
    return (
        <Avatar size="lg">
            <AvatarImage src="/favcon.png"/>
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}