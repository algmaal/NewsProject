import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as React from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import ChangePassword from './User/ChangePassword'
import UserInfo from './User/UserInfo'
import Logout from './User/Logout'
import LiveScore from './User/LiveScore'
import History from './User/History'

class UserScreen extends React.Component {

    static navigationOptions = {
        title: 'CÁ NHÂN',
    };

    _handleLogout = () => {
        this.props.navigation.navigate("Logout");
    }

    render() {
        return (
            <ScrollView>
                <List.Section>
                    <List.Subheader>CÁ NHÂN</List.Subheader>
                    <List.Item onPress={() => this.props.navigation.navigate("UserInfo")}
                    title="Thông tin tài khoản" right={props => <List.Icon {...props} icon="chevron-right" />}
                    left={() => <List.Icon color="#000" icon="account-box" />}/>
                    <List.Item onPress={() => this.props.navigation.navigate("ChangePassword")}
                    title="Đổi mật khẩu" right={props => <List.Icon {...props} icon="chevron-right" />}
                    left={() => <List.Icon color="#000" icon="lock" />}/>
                    <List.Item
                    title="Tin đã đánh dấu" right={props => <List.Icon {...props} icon="chevron-right" />}
                    left={() => <List.Icon color="#000" icon="bookmark" />}/>
                    <List.Item onPress={() => this.props.navigation.navigate("History")}
                    title="Tin đọc gần đây" right={props => <List.Icon {...props} icon="chevron-right" />}
                    left={() => <List.Icon color="#000" icon="clock" />}/>
                    <List.Item onPress={this._handleLogout}
                    title="Đăng xuất" right={props => <List.Icon {...props} icon="chevron-right" />}
                    left={() => <List.Icon color="#000" icon="logout" />}/>
                </List.Section>
                <List.Section>
                    <List.Subheader>ỨNG DỤNG</List.Subheader>
                    <List.Item title="Livescore" onPress={() => this.props.navigation.navigate("LiveScore")}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    left={() => <List.Icon color="#000" icon="soccer" />}/>
                    <List.Item title="Điều khoản sử dụng" left={() => <List.Icon color="#000" icon="clipboard-check" />}/>
                    <List.Item title="Đánh giá ứng dụng" left={() => <List.Icon color="#000" icon="star" />}/>
                    <List.Item title="Góp ý" left={() => <List.Icon color="#000" icon="email" />}/>
                </List.Section>
            </ScrollView>
        );
    }
}

const UserNavigator = createStackNavigator({
  UserScreen: UserScreen,
  ChangePassword: ChangePassword,
  UserInfo: UserInfo,
  Logout: Logout,
  LiveScore: LiveScore,
  History: History
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#f7f7f7',
        },
    }
});

export default createAppContainer(UserNavigator);