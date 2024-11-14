import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AboutUs = () => {
    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 8, mb: 8 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    About Us
                </Typography>
                <Typography variant="body1" paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel lectus vel ex venenatis malesuada at a magna. Cras at massa a dui vulputate fringilla. Praesent ut sollicitudin lectus. Donec sed bibendum tortor, et suscipit justo. Phasellus scelerisque augue quis felis bibendum, in dictum ligula porttitor.
                </Typography>
                <Typography variant="body1" paragraph>
                    Curabitur sed elit eu risus posuere volutpat. Pellentesque ac interdum purus. Donec vitae leo nec felis varius pellentesque a vel dui. Morbi ac justo et nisi scelerisque commodo. Nulla facilisi. Mauris vulputate, risus in sagittis euismod, lectus augue euismod purus, ac tristique ex metus at justo. Proin malesuada elit id nisi feugiat, et posuere dolor auctor. Suspendisse potenti.
                </Typography>
                <Typography variant="body1" paragraph>
                    Phasellus blandit libero et sollicitudin lacinia. Sed fermentum metus libero, a bibendum sapien blandit et. Donec sit amet ante orci. Duis dictum velit a risus convallis, non convallis ex lacinia. In hac habitasse platea dictumst. Fusce eget tortor et eros suscipit tempus a id magna. Integer volutpat, libero nec consectetur hendrerit, ligula nisl efficitur risus, at varius metus purus nec sapien.
                </Typography>
                <Typography variant="body1" paragraph>
                    Sed ultricies scelerisque vestibulum. Suspendisse potenti. Curabitur ut purus euismod, sollicitudin dui id, malesuada dolor. Integer venenatis purus non velit ultrices, a dignissim dui venenatis. Nunc viverra ex quis nulla feugiat, sed ornare nisl feugiat. In vulputate nisi eget nisi efficitur, id volutpat leo posuere. Morbi eu bibendum nibh, ut aliquet felis.
                </Typography>
                <Typography variant="body1" paragraph>
                    Quisque eget purus sit amet nisi facilisis facilisis a nec magna. Nulla facilisi. Nullam sed faucibus mauris, at tristique libero. Maecenas mollis lorem ut semper efficitur. Aliquam erat volutpat. Nam eget venenatis odio. Aliquam efficitur, sem at feugiat pretium, quam odio viverra enim, ac tempor dui nisi in metus. Pellentesque sit amet hendrerit dolor.
                </Typography>
            </Box>
        </Container>
    );
};

export default AboutUs;
