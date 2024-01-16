export default function Project({ params }: { params: { slug: string } }) {
    return (
        <h1>{params.slug}</h1>
    )
}