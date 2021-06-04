import React, { useState, useEffect } from "react"
import { Modal, ActivityIndicator } from 'react-native'
import StatusBarPage from "../../components/StatusBarPage"
import { useIsFocused } from "@react-navigation/native"

import Menu from "../../components/Menu"
import ListItem from "../../components/ListItem"
import ModalLink from "../../components/ModalLink"

import { getLinksSave, deleteLink } from "../../utils/storeLinks"

import { Container, Title, ListLinks, ContainerEmpty, WarningText } from './styles'

export default function Home() {
    const isFocused = useIsFocused()

    const [links, setLinks] = useState([])
    const [data, setData] = useState({})
    const [modalVisible, setModalVisible] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getLinks() {
            const result = await getLinksSave("sujeitolinks")
            setLinks(result)
        }

        getLinks()
    }, [isFocused])

    function handleItem(item) {
        setData(item)
        setModalVisible(true)
    }

    async function handleDelele(id) {
        const result = await deleteLink(links, id)
        setLinks(result)
        setLoading(false)
    }

    return (
        <Container>
            <StatusBarPage
                barStyle="light-content"
                backgroundColor="#132742"
            />
            <Menu />
            <Title>Meus Links</Title>

        
            {
                links.length === 0 && (
                    <ContainerEmpty>
                        <WarningText>Você ainda não possui nenhum link :(</WarningText>
                    </ContainerEmpty>
                )
            }
            <ListLinks
                data={links}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <ListItem data={item} selectedItem={handleItem} deleteItem={handleDelele} />}
                contentContainerStyle={{ paddingBottom: 22 }}
                showVerticalScrollIndicator={false}
            />
            <Modal visible={modalVisible} transparent animationType="slide">
                <ModalLink onClose={() => setModalVisible(false)} data={data} />
            </Modal>
        </Container>
    )
}