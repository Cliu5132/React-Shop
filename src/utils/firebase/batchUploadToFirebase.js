import { addCollectionAndDocuments } from './firebase.utils'

import SHOP_DATA from '../../shop-data'

export const uploader = () => {
    addCollectionAndDocuments('categories', SHOP_DATA)
    console.log('Done!')
}