import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = ({ navigation }) => {

    const handleRenderCategories = (itemData) => {
        const onPressHandler = () => {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id
            });
        }
        return (<CategoryGridTile title={itemData?.item.title}
            color={itemData.item.color}
            onPress={onPressHandler} />)
    }

    return (
        <FlatList data={CATEGORIES} keyExtractor={(item) => item.id}
            renderItem={handleRenderCategories}
            numColumns="2"
        />


    );
};

export default CategoriesScreen;