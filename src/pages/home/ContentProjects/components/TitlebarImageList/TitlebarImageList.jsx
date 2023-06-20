import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Modal } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';

export default function TitlebarImageList() {
    const [open, setOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(null);

    const handleOpen = (item) => {
        setSelectedItem(item);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    return (
        <>
            <ImageList sx={{
                width: "90%", height: 500, margin: "auto",
                "&::-webkit-scrollbar": {
                    backgroundColor: 'transparent'
                }
            }}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img className='.MuiImageListItem-img'
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                    onClick={() => handleOpen(item)}
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            {selectedItem && (
                <BasicModal
                    open={open}
                    handleClose={handleClose}
                    modalTitle={selectedItem.modalTitle}
                    modalTechs={selectedItem.modalTechs}
                    modalText={selectedItem.modalText}
                    site={selectedItem.site}
                    repo={selectedItem.repo}
                />
            )}
        </>
    );
}

function BasicModal({ open, handleClose, modalTitle, modalText, modalTechs, site, repo }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '98%',
                maxWidth: '700px',
                margin: 'auto',
            }}
        >

            <Box sx={{ position: 'absolute', bgcolor: '#003249', color: 'white', boxShadow: 24, p: 2, fontFamily: 'Roboto' }}>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
                    <button style={{ border: '1px solid #232323', backgroundColor: 'transparent', padding: '.2rem .8rem', borderRadius: '.75rem', color: 'white' }} onClick={handleClose}>X</button>
                </div>
                <Typography id="modal-modal-title" variant="h5" component="h2">
                    <p style={{ textDecoration: 'underline' }}>{modalTitle}</p>
                </Typography >
                <p>{modalTechs}</p>
                <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'justify' }}>
                    <p>{modalText}</p>
                </Typography>
                <p>Site: <a href={site} target="_blank" rel="noopener noreferrer">{site}</a></p>
                <p>Repositório: <a href={repo} target="_blank" rel="noopener noreferrer">{repo}</a></p>
            </Box>
        </Modal>
    );
}

const itemData = [
    {
        img: 'https://cdn.discordapp.com/attachments/1091425036440711289/1120744786526216202/weatherDay-project.jpeg',
        title: 'WeatherDay',
        author: '@dev-erikalves on Github',
        modalTitle: "Aplicação do clima, WeatherDay.",
        modalTechs: "TECNOLOGIAS: ReactJs, Sass(Scss)",
        modalText: "Simples aplicação que mostra a previsão do tempo, faze-lo foi desafiador, um dos meus primeiros projetos, lidei com várias adversidades, erros e bugs, consegui lidar com todos e buscar soluções praticas e eficientes. Acredito ter agregado bastante, a consumir APIs, tratamentos de erros, etc. Nesse projeto usei a API do OpenWeather.",
        site: "https://dev-erikalves.github.io/WeatherDay/",
        repo: "https://github.com/dev-erikalves/WeatherDay",
    },
    {
        img: 'https://cdn.discordapp.com/attachments/1091425036440711289/1120771576980328478/SL-070720-32260-33.jpg',
        title: 'Em breve...',
        author: 'Em breve...',
        modalTitle: "Em breve um novo projeto...",
        modalTechs: "...",
        modalText: "Aguarde...",
        link1: "",
        link2: "",
    },
    {
        img: 'https://cdn.discordapp.com/attachments/1091425036440711289/1120771576980328478/SL-070720-32260-33.jpg',
        title: 'Em breve...',
        author: 'Em breve...',
        modalTitle: "Em breve um novo projeto...",
        modalTechs: "...",
        modalText: "Aguarde...",
        link1: "",
        link2: "",
    },
    {
        img: 'https://cdn.discordapp.com/attachments/1091425036440711289/1120771576980328478/SL-070720-32260-33.jpg',
        title: 'Em breve...',
        author: 'Em breve...',
        modalTitle: "Em breve um novo projeto...",
        modalTechs: "...",
        modalText: "Aguarde...",
        link1: "",
        link2: "",

    },
    {
        img: 'https://cdn.discordapp.com/attachments/1091425036440711289/1120771576980328478/SL-070720-32260-33.jpg',
        title: 'Em breve...',
        author: 'Em breve...',
        modalTitle: "Em breve um novo projeto...",
        modalTechs: "...",
        modalText: "Aguarde...",
        link1: "",
        link2: "",
    },
    {
        img: 'https://cdn.discordapp.com/attachments/1091425036440711289/1120771576980328478/SL-070720-32260-33.jpg',
        title: 'Em breve...',
        author: 'Em breve...',
        modalTitle: "Em breve um novo projeto...",
        modalTechs: "...",
        modalText: "Aguarde...",
        link1: "",
        link2: "",
    },
    {
        img: 'https://cdn.discordapp.com/attachments/1091425036440711289/1120771576980328478/SL-070720-32260-33.jpg',
        title: 'Em breve...',
        author: 'Em breve...',
        modalTitle: "Em breve um novo projeto...",
        modalTechs: "...",
        modalText: "Aguarde...",
        link1: "",
        link2: "",
    },
    {
        img: 'https://cdn.discordapp.com/attachments/1091425036440711289/1120771576980328478/SL-070720-32260-33.jpg',
        title: 'Em breve...',
        author: 'Em breve...',
        modalTitle: "Em breve um novo projeto...",
        modalTechs: "...",
        modalText: "Aguarde...",
        link1: "",
        link2: "",
    },
    {
        img: 'https://cdn.discordapp.com/attachments/1091425036440711289/1120771576980328478/SL-070720-32260-33.jpg',
        title: 'Em breve...',
        author: 'Em breve...',
        modalTitle: "Em breve um novo projeto...",
        modalTechs: "...",
        modalText: "Aguarde...",
        link1: "",
        link2: "",
    },
    {
        img: 'https://cdn.discordapp.com/attachments/1091425036440711289/1120771576980328478/SL-070720-32260-33.jpg',
        title: 'Em breve...',
        author: 'Em breve...',
        modalTitle: "Em breve um novo projeto...",
        modalTechs: "...",
        modalText: "Aguarde...",
        link1: "",
        link2: "",
    },
];