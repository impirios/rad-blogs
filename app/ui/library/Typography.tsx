import Heading from "@radui/ui/Heading"
import Text from "@radui/ui/Text"


const H1 = (props: React.ComponentProps<typeof Heading>) => (
    <Heading as="h1" {...props} />
)

const H2 = (props: React.ComponentProps<typeof Heading>) => (
    <Heading as="h2" {...props} />
)

const H3 = (props: React.ComponentProps<typeof Heading>) => (
    <Heading as="h3" {...props} />
)

const H4 = (props: React.ComponentProps<typeof Heading>) => (
    <Heading as="h4" {...props} />
)

const H5 = (props: React.ComponentProps<typeof Heading>) => (
    <Heading as="h5" {...props} />
)

const H6 = (props: React.ComponentProps<typeof Heading>) => (
    <Heading as="h6" {...props} />
)


const Body = (props: React.ComponentProps<typeof Text>) => (
    <Text  {...props} />
)



const Typography = {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Body
};

export default Typography;

