import { motion, Variants } from "framer-motion";
import Card from 'react-bootstrap/Card';
import React from "react";

interface KCardProps {
    image   ?: string;
    title   ?: React.ReactNode; 
    content ?: string;
    isMobile?: boolean; 
}


function KCard({ image, title, content, isMobile }: KCardProps) {
    const box = {
        maxWidth: isMobile ? '`60%' : '18.75rem', 
        margin: '1.25rem auto',
    };

    const cardVariants: Variants = {
        offscreen: {
            y: isMobile ? 0 : 100,
        },
        onscreen: {
            y: isMobile ? 0 : 50,
            rotate: isMobile ? 0 : -10,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
            },
        },
    };

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }} 
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
