import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FolderTypes } from "./page"
import Link from "next/link"

const Folderslist = ({ folder }: { folder: FolderTypes }) => {
    return (
        <div>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>{folder.name}</CardTitle>
                    <CardDescription>Please click on view now button to view the pictures present in {folder.name}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-end">
                    <Link href={`/album/${folder.name}`}>
                        <Button>View Album</Button>
                    </Link>
                </CardFooter>
            </Card>

        </div>
    )
}

export default Folderslist
