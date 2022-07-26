import { Card, Text, User } from '@nextui-org/react';

export default function UserCard() {
    return (
        <Card css={{ mw: "200px" }}>
            <Card.Body>
                <User
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    name="Ariana Wattson"
                />
            </Card.Body>
        </Card>
    )
}