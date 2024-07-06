import { getProfile } from "@/libs/microcms"
import ViTA from "@/Component/util/ViTA"

export default async function Left(){
    const {contents} = await getProfile()
    return (
        <div className="px-4">
            <ViTA
                ButtonText="泡沫君はどんな人？"
                Default={<p>詳しく知る</p>}
                After={contents[0]}
            />
        </div>
    )
}