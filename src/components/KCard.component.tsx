import { motion, Variants } from "framer-motion";
import Card from 'react-bootstrap/Card';
import React from "react";


interface KCardProps {
    image   ?: string;
    title   ?: React.ReactNode; 
    content ?: string;
    isMobile?: boolean; 
}

const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

function KCard({ image, title, content, isMobile }: KCardProps) {
    const box = {
        maxWidth: '300px', 
        margin: '20px auto',
    };

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            style={box}
            variants={!isMobile ? cardVariants : undefined} 
        >
            <Card>
                {image && <Card.Img variant="top" src={image} />}
                <Card.Body>
                    <Card.Title>
                        {title}  
                    </Card.Title>
                    <Card.Text>
                        {content}
                    </Card.Text>
                </Card.Body>
            </Card>
        </motion.div>
    );
}

export default KCard;
