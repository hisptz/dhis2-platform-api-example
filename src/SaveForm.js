import {Button, ButtonStrip, Modal, ModalActions, ModalContent, ModalTitle} from "@dhis2/ui"


export function SaveForm({hide, onClose}) {

    return (
        <Modal onClose={onClose} hide={hide}>
            <ModalTitle>
                Save configuration
            </ModalTitle>
            <ModalContent>
                Form here
            </ModalContent>
            <ModalActions>
                <ButtonStrip>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button primary>Save</Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
    )
}
