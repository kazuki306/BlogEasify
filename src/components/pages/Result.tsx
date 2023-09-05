//結果ページの大元
import { Wrap, WrapItem, Box, Flex, Heading, Spacer} from "@chakra-ui/react";
import { memo, FC } from "react";
import { Photo } from "../organisms/result/Photo";
import { Summary } from "../organisms/result/Summary";
// import Slider from "react-slick";

export const Result: FC = memo(() => {
    const images = ["https://blog-easify-background-images.s3.us-east-1.amazonaws.com/00000-3847488475.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaDmFwLW5vcnRoZWFzdC0xIkYwRAIgIWrkkikxgFkaUgZxHTHi8WNWrMMYEZ5V9dgIdJDeAZsCIC8ZBoxcA8JaRr3NMZwAXz1DEuR8Yn6Q02OMCiyp86hRKu8CCMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMzM3Njg1MDU5MDM5IgwnMUSpOIe7xAGUm28qwwKo2EtJR1hXGUXkK3NXWvdp2DpFlf0XyO1ZrEq7%2BqI%2F%2BFJNJXRRI1%2Bvq73s233EFJ7epadOIWytMZGpEpMrcfAsx94UcRpNaO%2B8HpvTD6Bw61of8kEjkG5tINA5G4DSD%2BOx2imBb%2B8aFEy0fLEbxaR%2BP71Qb8HbSkmvBj4Za4Hy%2Fhr692S8Wt19SQI2hqeUvwyAT7NiJpkK62TMLF2oh41r%2FC1CAWTNnOQMU0dXJAN%2BZD8KnSDvJwPvtfD9OWQCYQrfXN1JGN0PGd00987ujTtdR3e2lOgQi6dvIO77haKlowxhG27OF0aXlfDjYIYB0ubrOjCP7f8uT3w66uMa7FAvsSsv4BUakftBTNBbqeXGRDQ7J56ZPOfjNbMq9A5QKJ%2BGyy48bqPwKy7Pc%2BrbBt%2B7eAdxRW8%2FZjTX12W9DWewa5TTDTDI2b%2BnBjqIAjuNwC%2FS6V3qkzzRsKaDiLysB0IrtRd9wFQSxJp72T%2FFnFr024oB7kw1QSjnVhBybzdDw5AkJ8bT9qZ1q2TN%2FGhCGWMC%2BiDMdvaalF4yrL6qlxz2Egxg1wmaP%2FTb0fWp%2B%2F1keHu8lXhCg5RIdLOlVs1CPaAExe9IAM%2BnNqzFZ%2ByuT2geTJcHy2JtKRvQnlJTNcQIvzp3v6zh%2BUOCre4mO28b3LnheiYSu4bViL0Ekmu9tIeWzf1YyrDFjH%2BenOlCSP5s6pnfR%2FqvqyikqxBZ3E3%2BGhbsbqzdBeSQJh%2BEQAJUmJTSMsgpDDExiRhIorv7%2F3BQkCkvY%2FKQCCHssOV1W52LDPk%2BDcPRug%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230831T020700Z&X-Amz-SignedHeaders=host&X-Amz-Expires=720&X-Amz-Credential=ASIAU5H4ZCXPX7C7SZ4M%2F20230831%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0b2972bc6d8b90ceef82c56310f9b8ff5d8d1427696172e7f9e6b8a38f933678", "https://blog-easify-background-images.s3.us-east-1.amazonaws.com/00000-8754875849.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaDmFwLW5vcnRoZWFzdC0xIkYwRAIgIWrkkikxgFkaUgZxHTHi8WNWrMMYEZ5V9dgIdJDeAZsCIC8ZBoxcA8JaRr3NMZwAXz1DEuR8Yn6Q02OMCiyp86hRKu8CCMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMzM3Njg1MDU5MDM5IgwnMUSpOIe7xAGUm28qwwKo2EtJR1hXGUXkK3NXWvdp2DpFlf0XyO1ZrEq7%2BqI%2F%2BFJNJXRRI1%2Bvq73s233EFJ7epadOIWytMZGpEpMrcfAsx94UcRpNaO%2B8HpvTD6Bw61of8kEjkG5tINA5G4DSD%2BOx2imBb%2B8aFEy0fLEbxaR%2BP71Qb8HbSkmvBj4Za4Hy%2Fhr692S8Wt19SQI2hqeUvwyAT7NiJpkK62TMLF2oh41r%2FC1CAWTNnOQMU0dXJAN%2BZD8KnSDvJwPvtfD9OWQCYQrfXN1JGN0PGd00987ujTtdR3e2lOgQi6dvIO77haKlowxhG27OF0aXlfDjYIYB0ubrOjCP7f8uT3w66uMa7FAvsSsv4BUakftBTNBbqeXGRDQ7J56ZPOfjNbMq9A5QKJ%2BGyy48bqPwKy7Pc%2BrbBt%2B7eAdxRW8%2FZjTX12W9DWewa5TTDTDI2b%2BnBjqIAjuNwC%2FS6V3qkzzRsKaDiLysB0IrtRd9wFQSxJp72T%2FFnFr024oB7kw1QSjnVhBybzdDw5AkJ8bT9qZ1q2TN%2FGhCGWMC%2BiDMdvaalF4yrL6qlxz2Egxg1wmaP%2FTb0fWp%2B%2F1keHu8lXhCg5RIdLOlVs1CPaAExe9IAM%2BnNqzFZ%2ByuT2geTJcHy2JtKRvQnlJTNcQIvzp3v6zh%2BUOCre4mO28b3LnheiYSu4bViL0Ekmu9tIeWzf1YyrDFjH%2BenOlCSP5s6pnfR%2FqvqyikqxBZ3E3%2BGhbsbqzdBeSQJh%2BEQAJUmJTSMsgpDDExiRhIorv7%2F3BQkCkvY%2FKQCCHssOV1W52LDPk%2BDcPRug%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230831T015646Z&X-Amz-SignedHeaders=host&X-Amz-Expires=720&X-Amz-Credential=ASIAU5H4ZCXPX7C7SZ4M%2F20230831%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5c3e4354f4b03bf227325c8bd8c84671fa20f9b2ee41a867e21c16983644e930", "https://blog-easify-background-images.s3.us-east-1.amazonaws.com/00000-3014960925.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaDmFwLW5vcnRoZWFzdC0xIkYwRAIgIWrkkikxgFkaUgZxHTHi8WNWrMMYEZ5V9dgIdJDeAZsCIC8ZBoxcA8JaRr3NMZwAXz1DEuR8Yn6Q02OMCiyp86hRKu8CCMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMzM3Njg1MDU5MDM5IgwnMUSpOIe7xAGUm28qwwKo2EtJR1hXGUXkK3NXWvdp2DpFlf0XyO1ZrEq7%2BqI%2F%2BFJNJXRRI1%2Bvq73s233EFJ7epadOIWytMZGpEpMrcfAsx94UcRpNaO%2B8HpvTD6Bw61of8kEjkG5tINA5G4DSD%2BOx2imBb%2B8aFEy0fLEbxaR%2BP71Qb8HbSkmvBj4Za4Hy%2Fhr692S8Wt19SQI2hqeUvwyAT7NiJpkK62TMLF2oh41r%2FC1CAWTNnOQMU0dXJAN%2BZD8KnSDvJwPvtfD9OWQCYQrfXN1JGN0PGd00987ujTtdR3e2lOgQi6dvIO77haKlowxhG27OF0aXlfDjYIYB0ubrOjCP7f8uT3w66uMa7FAvsSsv4BUakftBTNBbqeXGRDQ7J56ZPOfjNbMq9A5QKJ%2BGyy48bqPwKy7Pc%2BrbBt%2B7eAdxRW8%2FZjTX12W9DWewa5TTDTDI2b%2BnBjqIAjuNwC%2FS6V3qkzzRsKaDiLysB0IrtRd9wFQSxJp72T%2FFnFr024oB7kw1QSjnVhBybzdDw5AkJ8bT9qZ1q2TN%2FGhCGWMC%2BiDMdvaalF4yrL6qlxz2Egxg1wmaP%2FTb0fWp%2B%2F1keHu8lXhCg5RIdLOlVs1CPaAExe9IAM%2BnNqzFZ%2ByuT2geTJcHy2JtKRvQnlJTNcQIvzp3v6zh%2BUOCre4mO28b3LnheiYSu4bViL0Ekmu9tIeWzf1YyrDFjH%2BenOlCSP5s6pnfR%2FqvqyikqxBZ3E3%2BGhbsbqzdBeSQJh%2BEQAJUmJTSMsgpDDExiRhIorv7%2F3BQkCkvY%2FKQCCHssOV1W52LDPk%2BDcPRug%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230831T015729Z&X-Amz-SignedHeaders=host&X-Amz-Expires=720&X-Amz-Credential=ASIAU5H4ZCXPX7C7SZ4M%2F20230831%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e0f7db2f8964f09584b848af553f34b058692091c0467aeefacae3df2f7c196a"]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Flex align="center" direction="column" justify="space-between">
            <Box bg="white" p={4} borderRadius="md" shadow="md" width="80%" >
                <Heading as="h1" size="lg" textAlign="center">サムネイル</Heading>
                <Wrap p={{ base: 4, md: 10 }}>
                    <Photo url="https://source.unsplash.com/random"/>
                    {/* <Photo url="https://blog-easify-background-images.s3.us-east-1.amazonaws.com/00000-3847488475.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaDmFwLW5vcnRoZWFzdC0xIkYwRAIgIWrkkikxgFkaUgZxHTHi8WNWrMMYEZ5V9dgIdJDeAZsCIC8ZBoxcA8JaRr3NMZwAXz1DEuR8Yn6Q02OMCiyp86hRKu8CCMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMzM3Njg1MDU5MDM5IgwnMUSpOIe7xAGUm28qwwKo2EtJR1hXGUXkK3NXWvdp2DpFlf0XyO1ZrEq7%2BqI%2F%2BFJNJXRRI1%2Bvq73s233EFJ7epadOIWytMZGpEpMrcfAsx94UcRpNaO%2B8HpvTD6Bw61of8kEjkG5tINA5G4DSD%2BOx2imBb%2B8aFEy0fLEbxaR%2BP71Qb8HbSkmvBj4Za4Hy%2Fhr692S8Wt19SQI2hqeUvwyAT7NiJpkK62TMLF2oh41r%2FC1CAWTNnOQMU0dXJAN%2BZD8KnSDvJwPvtfD9OWQCYQrfXN1JGN0PGd00987ujTtdR3e2lOgQi6dvIO77haKlowxhG27OF0aXlfDjYIYB0ubrOjCP7f8uT3w66uMa7FAvsSsv4BUakftBTNBbqeXGRDQ7J56ZPOfjNbMq9A5QKJ%2BGyy48bqPwKy7Pc%2BrbBt%2B7eAdxRW8%2FZjTX12W9DWewa5TTDTDI2b%2BnBjqIAjuNwC%2FS6V3qkzzRsKaDiLysB0IrtRd9wFQSxJp72T%2FFnFr024oB7kw1QSjnVhBybzdDw5AkJ8bT9qZ1q2TN%2FGhCGWMC%2BiDMdvaalF4yrL6qlxz2Egxg1wmaP%2FTb0fWp%2B%2F1keHu8lXhCg5RIdLOlVs1CPaAExe9IAM%2BnNqzFZ%2ByuT2geTJcHy2JtKRvQnlJTNcQIvzp3v6zh%2BUOCre4mO28b3LnheiYSu4bViL0Ekmu9tIeWzf1YyrDFjH%2BenOlCSP5s6pnfR%2FqvqyikqxBZ3E3%2BGhbsbqzdBeSQJh%2BEQAJUmJTSMsgpDDExiRhIorv7%2F3BQkCkvY%2FKQCCHssOV1W52LDPk%2BDcPRug%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230831T020700Z&X-Amz-SignedHeaders=host&X-Amz-Expires=720&X-Amz-Credential=ASIAU5H4ZCXPX7C7SZ4M%2F20230831%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0b2972bc6d8b90ceef82c56310f9b8ff5d8d1427696172e7f9e6b8a38f933678"/>
                    <Photo url="https://blog-easify-background-images.s3.us-east-1.amazonaws.com/00000-8754875849.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaDmFwLW5vcnRoZWFzdC0xIkYwRAIgIWrkkikxgFkaUgZxHTHi8WNWrMMYEZ5V9dgIdJDeAZsCIC8ZBoxcA8JaRr3NMZwAXz1DEuR8Yn6Q02OMCiyp86hRKu8CCMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMzM3Njg1MDU5MDM5IgwnMUSpOIe7xAGUm28qwwKo2EtJR1hXGUXkK3NXWvdp2DpFlf0XyO1ZrEq7%2BqI%2F%2BFJNJXRRI1%2Bvq73s233EFJ7epadOIWytMZGpEpMrcfAsx94UcRpNaO%2B8HpvTD6Bw61of8kEjkG5tINA5G4DSD%2BOx2imBb%2B8aFEy0fLEbxaR%2BP71Qb8HbSkmvBj4Za4Hy%2Fhr692S8Wt19SQI2hqeUvwyAT7NiJpkK62TMLF2oh41r%2FC1CAWTNnOQMU0dXJAN%2BZD8KnSDvJwPvtfD9OWQCYQrfXN1JGN0PGd00987ujTtdR3e2lOgQi6dvIO77haKlowxhG27OF0aXlfDjYIYB0ubrOjCP7f8uT3w66uMa7FAvsSsv4BUakftBTNBbqeXGRDQ7J56ZPOfjNbMq9A5QKJ%2BGyy48bqPwKy7Pc%2BrbBt%2B7eAdxRW8%2FZjTX12W9DWewa5TTDTDI2b%2BnBjqIAjuNwC%2FS6V3qkzzRsKaDiLysB0IrtRd9wFQSxJp72T%2FFnFr024oB7kw1QSjnVhBybzdDw5AkJ8bT9qZ1q2TN%2FGhCGWMC%2BiDMdvaalF4yrL6qlxz2Egxg1wmaP%2FTb0fWp%2B%2F1keHu8lXhCg5RIdLOlVs1CPaAExe9IAM%2BnNqzFZ%2ByuT2geTJcHy2JtKRvQnlJTNcQIvzp3v6zh%2BUOCre4mO28b3LnheiYSu4bViL0Ekmu9tIeWzf1YyrDFjH%2BenOlCSP5s6pnfR%2FqvqyikqxBZ3E3%2BGhbsbqzdBeSQJh%2BEQAJUmJTSMsgpDDExiRhIorv7%2F3BQkCkvY%2FKQCCHssOV1W52LDPk%2BDcPRug%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230831T015646Z&X-Amz-SignedHeaders=host&X-Amz-Expires=720&X-Amz-Credential=ASIAU5H4ZCXPX7C7SZ4M%2F20230831%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5c3e4354f4b03bf227325c8bd8c84671fa20f9b2ee41a867e21c16983644e930"/> */}
                </Wrap>
            </Box>
            <Spacer />
            <br />
            <Summary />
        </Flex>
    )
})